import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-10-0-retro-server');
}

export default function Tibijka100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-10-0-retro-server" />;
}
