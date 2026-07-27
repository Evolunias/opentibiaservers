import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-10-0-retro-server');
}

export default function Luminera100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-10-0-retro-server" />;
}
