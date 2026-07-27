import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolunia-client');
}

export default function ActiveEvoluniaClientKeywordPage() {
  return <StaticKeywordPage slug="active-evolunia-client" />;
}
