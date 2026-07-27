import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-4-retro-server');
}

export default function Evolunia74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-4-retro-server" />;
}
