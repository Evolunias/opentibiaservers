import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-high-exp');
}

export default function CyntaraHighExpKeywordPage() {
  return <StaticKeywordPage slug="cyntara-high-exp" />;
}
