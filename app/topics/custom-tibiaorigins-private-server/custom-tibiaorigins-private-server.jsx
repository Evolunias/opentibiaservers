import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaorigins-private-server');
}

export default function CustomTibiaoriginsPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaorigins-private-server" />;
}
