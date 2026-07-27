import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-10-0-retro-server');
}

export default function Evolera100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-10-0-retro-server" />;
}
