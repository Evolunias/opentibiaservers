import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvp');
}

export default function TibiantisPvpKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvp" />;
}
