import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-1-retro-server');
}

export default function Blazera71RetroServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-1-retro-server" />;
}
