import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-ot-server-germany');
}

export default function NonPvpOtServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-ot-server-germany" />;
}
