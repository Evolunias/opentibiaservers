import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-login');
}

export default function CyntaraLoginKeywordPage() {
  return <StaticKeywordPage slug="cyntara-login" />;
}
