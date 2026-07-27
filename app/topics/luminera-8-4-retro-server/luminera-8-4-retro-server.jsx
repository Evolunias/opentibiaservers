import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-4-retro-server');
}

export default function Luminera84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-4-retro-server" />;
}
