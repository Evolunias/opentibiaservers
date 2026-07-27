import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-uk-server');
}

export default function RookgaardTalesUkServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-uk-server" />;
}
