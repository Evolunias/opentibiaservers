import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-uk-servers');
}

export default function RookgaardTalesUkServersKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-uk-servers" />;
}
