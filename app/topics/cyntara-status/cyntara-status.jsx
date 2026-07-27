import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-status');
}

export default function CyntaraStatusKeywordPage() {
  return <StaticKeywordPage slug="cyntara-status" />;
}
