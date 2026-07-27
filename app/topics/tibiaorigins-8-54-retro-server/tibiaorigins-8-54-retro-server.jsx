import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-54-retro-server');
}

export default function Tibiaorigins854RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-54-retro-server" />;
}
