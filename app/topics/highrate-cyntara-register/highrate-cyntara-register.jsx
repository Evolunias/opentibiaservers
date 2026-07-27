import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-cyntara-register');
}

export default function HighrateCyntaraRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-cyntara-register" />;
}
