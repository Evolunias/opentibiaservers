import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-ot-server-high-exp');
}

export default function NonPvpOtServerHighExpKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-ot-server-high-exp" />;
}
