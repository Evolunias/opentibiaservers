import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-evolunia-servers');
}

export default function CustomMapEvoluniaServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-evolunia-servers" />;
}
