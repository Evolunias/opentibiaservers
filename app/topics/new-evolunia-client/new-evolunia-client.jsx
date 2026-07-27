import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolunia-client');
}

export default function NewEvoluniaClientKeywordPage() {
  return <StaticKeywordPage slug="new-evolunia-client" />;
}
