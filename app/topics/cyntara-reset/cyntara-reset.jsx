import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-reset');
}

export default function CyntaraResetKeywordPage() {
  return <StaticKeywordPage slug="cyntara-reset" />;
}
