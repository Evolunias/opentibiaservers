import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaorigins-login');
}

export default function HighrateTibiaoriginsLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaorigins-login" />;
}
