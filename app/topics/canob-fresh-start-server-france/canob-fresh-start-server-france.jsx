import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-fresh-start-server-france');
}

export default function CanobFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="canob-fresh-start-server-france" />;
}
