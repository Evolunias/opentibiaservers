import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-wars');
}

export default function AlasteraWarsKeywordPage() {
  return <StaticKeywordPage slug="alastera-wars" />;
}
