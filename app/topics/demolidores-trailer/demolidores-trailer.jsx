import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-trailer');
}

export default function DemolidoresTrailerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-trailer" />;
}
