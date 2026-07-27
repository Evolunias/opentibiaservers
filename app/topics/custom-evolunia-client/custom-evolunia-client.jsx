import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolunia-client');
}

export default function CustomEvoluniaClientKeywordPage() {
  return <StaticKeywordPage slug="custom-evolunia-client" />;
}
