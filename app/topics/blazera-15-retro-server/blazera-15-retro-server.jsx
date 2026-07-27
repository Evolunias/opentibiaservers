import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-15-retro-server');
}

export default function Blazera15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-15-retro-server" />;
}
