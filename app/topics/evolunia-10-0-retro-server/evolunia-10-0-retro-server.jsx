import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-10-0-retro-server');
}

export default function Evolunia100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-10-0-retro-server" />;
}
