import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiara-register');
}

export default function HighrateTibiaraRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiara-register" />;
}
