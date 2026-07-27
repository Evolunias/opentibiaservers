import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neptera-wars');
}

export default function NepteraWarsKeywordPage() {
  return <StaticKeywordPage slug="neptera-wars" />;
}
