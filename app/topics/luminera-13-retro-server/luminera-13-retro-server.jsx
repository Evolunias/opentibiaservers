import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-13-retro-server');
}

export default function Luminera13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-13-retro-server" />;
}
