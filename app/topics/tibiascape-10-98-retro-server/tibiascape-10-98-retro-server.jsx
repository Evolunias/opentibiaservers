import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-10-98-retro-server');
}

export default function Tibiascape1098RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-10-98-retro-server" />;
}
