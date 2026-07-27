import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-10-0-retro-server');
}

export default function Canob100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="canob-10-0-retro-server" />;
}
