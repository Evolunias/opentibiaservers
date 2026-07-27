import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nostalther-guide');
}

export default function CustomNostaltherGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-nostalther-guide" />;
}
