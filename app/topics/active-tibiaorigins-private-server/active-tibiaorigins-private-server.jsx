import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaorigins-private-server');
}

export default function ActiveTibiaoriginsPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaorigins-private-server" />;
}
