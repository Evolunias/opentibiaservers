import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-retro-server-mexico');
}

export default function CanobRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="canob-retro-server-mexico" />;
}
