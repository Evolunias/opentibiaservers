import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiara-register');
}

export default function LowrateTibiaraRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiara-register" />;
}
