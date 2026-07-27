import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvp-server-germany');
}

export default function TibiantisPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvp-server-germany" />;
}
