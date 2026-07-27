import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-wars');
}

export default function DemolidoresWarsKeywordPage() {
  return <StaticKeywordPage slug="demolidores-wars" />;
}
