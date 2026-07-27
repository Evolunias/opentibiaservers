import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-6-retro-server');
}

export default function Evolunia86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-6-retro-server" />;
}
