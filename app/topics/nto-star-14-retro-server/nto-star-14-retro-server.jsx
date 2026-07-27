import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-14-retro-server');
}

export default function NtoStar14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-14-retro-server" />;
}
