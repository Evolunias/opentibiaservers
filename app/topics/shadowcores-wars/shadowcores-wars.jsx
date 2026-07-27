import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-wars');
}

export default function ShadowcoresWarsKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-wars" />;
}
