import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-4-retro-server');
}

export default function Luminera74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-4-retro-server" />;
}
