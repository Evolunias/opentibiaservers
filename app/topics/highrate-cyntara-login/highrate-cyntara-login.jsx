import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-cyntara-login');
}

export default function HighrateCyntaraLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-cyntara-login" />;
}
