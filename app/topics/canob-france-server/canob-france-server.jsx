import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-france-server');
}

export default function CanobFranceServerKeywordPage() {
  return <StaticKeywordPage slug="canob-france-server" />;
}
