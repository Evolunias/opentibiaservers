import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-9-6-retro-server');
}

export default function Tibiaorigins96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-9-6-retro-server" />;
}
