import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-guide');
}

export default function CyntaraGuideKeywordPage() {
  return <StaticKeywordPage slug="cyntara-guide" />;
}
