import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-private-server');
}

export default function TibiaoriginsPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-private-server" />;
}
