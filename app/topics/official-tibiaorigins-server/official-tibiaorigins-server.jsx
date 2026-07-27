import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaorigins-server');
}

export default function OfficialTibiaoriginsServerKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaorigins-server" />;
}
