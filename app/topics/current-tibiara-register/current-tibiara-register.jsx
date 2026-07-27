import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiara-register');
}

export default function CurrentTibiaraRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-tibiara-register" />;
}
