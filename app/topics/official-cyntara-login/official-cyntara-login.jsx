import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-cyntara-login');
}

export default function OfficialCyntaraLoginKeywordPage() {
  return <StaticKeywordPage slug="official-cyntara-login" />;
}
