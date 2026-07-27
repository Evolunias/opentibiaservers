import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-retro-server-argentina');
}

export default function CanobRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="canob-retro-server-argentina" />;
}
