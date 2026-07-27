import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-9-6-retro-server');
}

export default function Tibijka96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-9-6-retro-server" />;
}
