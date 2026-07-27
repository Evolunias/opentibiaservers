import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaorigins-register');
}

export default function HighrateTibiaoriginsRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaorigins-register" />;
}
