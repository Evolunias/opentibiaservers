import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-12-retro-server');
}

export default function Blazera12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-12-retro-server" />;
}
