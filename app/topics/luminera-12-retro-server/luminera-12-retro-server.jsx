import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-12-retro-server');
}

export default function Luminera12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-12-retro-server" />;
}
