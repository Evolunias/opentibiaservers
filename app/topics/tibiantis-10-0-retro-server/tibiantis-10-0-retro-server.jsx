import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-10-0-retro-server');
}

export default function Tibiantis100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-10-0-retro-server" />;
}
