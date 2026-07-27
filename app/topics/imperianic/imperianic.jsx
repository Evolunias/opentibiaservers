import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic');
}

export default function ImperianicKeywordPage() {
  return <StaticKeywordPage slug="imperianic" />;
}
