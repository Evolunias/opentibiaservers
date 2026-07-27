import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-server-germany');
}

export default function NonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-server-germany" />;
}
