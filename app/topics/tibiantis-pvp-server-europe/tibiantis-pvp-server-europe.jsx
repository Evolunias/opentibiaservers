import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvp-server-europe');
}

export default function TibiantisPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvp-server-europe" />;
}
