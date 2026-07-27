import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-10-0-retro-server');
}

export default function Tibianus100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-10-0-retro-server" />;
}
