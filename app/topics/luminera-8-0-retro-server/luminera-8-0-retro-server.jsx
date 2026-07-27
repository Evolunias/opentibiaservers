import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-0-retro-server');
}

export default function Luminera80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-0-retro-server" />;
}
