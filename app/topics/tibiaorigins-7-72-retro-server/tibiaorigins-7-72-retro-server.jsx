import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-7-72-retro-server');
}

export default function Tibiaorigins772RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-7-72-retro-server" />;
}
