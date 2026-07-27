import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-non-pvp-server-germany');
}

export default function TibiantisNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-non-pvp-server-germany" />;
}
