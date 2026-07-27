import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-wars');
}

export default function ImperianicWarsKeywordPage() {
  return <StaticKeywordPage slug="imperianic-wars" />;
}
