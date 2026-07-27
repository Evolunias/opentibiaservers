import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-9-6-retro-server');
}

export default function Luminera96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-9-6-retro-server" />;
}
