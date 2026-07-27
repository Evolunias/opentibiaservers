import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-6-retro-server');
}

export default function Evolunia76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-6-retro-server" />;
}
