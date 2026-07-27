import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolunia-guide');
}

export default function CustomEvoluniaGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-evolunia-guide" />;
}
