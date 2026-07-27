import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-screenshots');
}

export default function MarolaotScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="marolaot-screenshots" />;
}
