import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaorigins-private-server');
}

export default function CurrentTibiaoriginsPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaorigins-private-server" />;
}
