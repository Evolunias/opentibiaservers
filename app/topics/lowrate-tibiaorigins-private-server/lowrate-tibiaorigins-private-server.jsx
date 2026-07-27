import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaorigins-private-server');
}

export default function LowrateTibiaoriginsPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaorigins-private-server" />;
}
