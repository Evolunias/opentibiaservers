import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-tibiaorigins-server');
}

export default function RetroTibiaoriginsServerKeywordPage() {
  return <StaticKeywordPage slug="retro-tibiaorigins-server" />;
}
