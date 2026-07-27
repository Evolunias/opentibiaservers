import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-14-retro-server');
}

export default function Luminera14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-14-retro-server" />;
}
