import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-retro-server-france');
}

export default function CanobRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="canob-retro-server-france" />;
}
