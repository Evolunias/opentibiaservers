import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-14-retro-server');
}

export default function Tibiaorigins14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-14-retro-server" />;
}
