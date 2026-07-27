import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-france-servers');
}

export default function ShadowcoresFranceServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-france-servers" />;
}
