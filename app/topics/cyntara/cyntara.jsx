import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara');
}

export default function CyntaraKeywordPage() {
  return <StaticKeywordPage slug="cyntara" />;
}
