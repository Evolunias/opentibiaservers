import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaorigins-private-server');
}

export default function FreshStartTibiaoriginsPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaorigins-private-server" />;
}
