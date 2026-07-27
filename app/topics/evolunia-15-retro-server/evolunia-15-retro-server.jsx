import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-15-retro-server');
}

export default function Evolunia15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-15-retro-server" />;
}
