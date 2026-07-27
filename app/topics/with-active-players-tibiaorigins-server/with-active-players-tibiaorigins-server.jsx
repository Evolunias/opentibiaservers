import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-tibiaorigins-server');
}

export default function WithActivePlayersTibiaoriginsServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-tibiaorigins-server" />;
}
