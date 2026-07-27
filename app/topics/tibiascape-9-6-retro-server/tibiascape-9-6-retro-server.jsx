import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-9-6-retro-server');
}

export default function Tibiascape96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-9-6-retro-server" />;
}
