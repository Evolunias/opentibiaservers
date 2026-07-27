import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaorigins-private-server');
}

export default function OfficialTibiaoriginsPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaorigins-private-server" />;
}
