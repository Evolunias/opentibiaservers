import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-ot-server-poland');
}

export default function NonPvpOtServerPolandKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-ot-server-poland" />;
}
