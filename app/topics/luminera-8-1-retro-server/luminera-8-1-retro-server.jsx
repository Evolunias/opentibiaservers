import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-1-retro-server');
}

export default function Luminera81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-1-retro-server" />;
}
