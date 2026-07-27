import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-france-server');
}

export default function ShadowcoresFranceServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-france-server" />;
}
