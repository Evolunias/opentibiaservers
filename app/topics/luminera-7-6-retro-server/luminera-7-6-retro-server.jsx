import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-6-retro-server');
}

export default function Luminera76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-6-retro-server" />;
}
