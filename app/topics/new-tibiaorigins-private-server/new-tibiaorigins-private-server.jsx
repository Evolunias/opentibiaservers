import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaorigins-private-server');
}

export default function NewTibiaoriginsPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaorigins-private-server" />;
}
