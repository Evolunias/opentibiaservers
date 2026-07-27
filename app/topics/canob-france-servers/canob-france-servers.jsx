import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-france-servers');
}

export default function CanobFranceServersKeywordPage() {
  return <StaticKeywordPage slug="canob-france-servers" />;
}
