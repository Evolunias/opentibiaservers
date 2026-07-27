import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-bosses');
}

export default function KasteriaBossesKeywordPage() {
  return <StaticKeywordPage slug="kasteria-bosses" />;
}
