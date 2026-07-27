import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-9-6-retro-server');
}

export default function Evolunia96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-9-6-retro-server" />;
}
