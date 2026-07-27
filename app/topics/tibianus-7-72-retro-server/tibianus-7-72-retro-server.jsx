import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-72-retro-server');
}

export default function Tibianus772RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-72-retro-server" />;
}
