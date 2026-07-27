import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-11-retro-server');
}

export default function Tibiaorigins11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-11-retro-server" />;
}
