import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaorigins-ot-server');
}

export default function HighrateTibiaoriginsOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaorigins-ot-server" />;
}
