import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oxygenot');
}

export default function CustomOxygenotKeywordPage() {
  return <StaticKeywordPage slug="custom-oxygenot" />;
}
