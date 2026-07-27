import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-evolunia-server');
}

export default function CustomMapEvoluniaServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-evolunia-server" />;
}
