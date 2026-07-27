import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-15-retro-server');
}

export default function Tibiascape15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-15-retro-server" />;
}
