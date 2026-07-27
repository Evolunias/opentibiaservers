import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-4-retro-server');
}

export default function Tibiaorigins84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-4-retro-server" />;
}
