import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolunia-create-account');
}

export default function RealMapEvoluniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolunia-create-account" />;
}
