import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-10-98-retro-server');
}

export default function Luminera1098RetroServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-10-98-retro-server" />;
}
