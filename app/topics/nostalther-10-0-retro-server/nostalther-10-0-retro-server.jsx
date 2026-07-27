import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-10-0-retro-server');
}

export default function Nostalther100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-10-0-retro-server" />;
}
