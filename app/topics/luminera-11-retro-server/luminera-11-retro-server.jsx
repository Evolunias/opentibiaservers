import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-11-retro-server');
}

export default function Luminera11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-11-retro-server" />;
}
