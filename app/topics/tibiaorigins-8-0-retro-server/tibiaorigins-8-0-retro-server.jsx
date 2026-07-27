import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-0-retro-server');
}

export default function Tibiaorigins80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-0-retro-server" />;
}
