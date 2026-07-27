import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nostalther-guide');
}

export default function ActiveNostaltherGuideKeywordPage() {
  return <StaticKeywordPage slug="active-nostalther-guide" />;
}
