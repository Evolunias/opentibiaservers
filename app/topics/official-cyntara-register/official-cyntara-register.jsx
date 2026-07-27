import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-cyntara-register');
}

export default function OfficialCyntaraRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-cyntara-register" />;
}
