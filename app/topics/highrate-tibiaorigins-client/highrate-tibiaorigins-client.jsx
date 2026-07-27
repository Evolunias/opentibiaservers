import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaorigins-client');
}

export default function HighrateTibiaoriginsClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaorigins-client" />;
}
