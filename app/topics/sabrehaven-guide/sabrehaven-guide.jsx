import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-guide');
}

export default function SabrehavenGuideKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-guide" />;
}
