import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaorigins-private-server');
}

export default function TopTibiaoriginsPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaorigins-private-server" />;
}
