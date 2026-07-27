import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolunia-server');
}

export default function NewEvoluniaServerKeywordPage() {
  return <StaticKeywordPage slug="new-evolunia-server" />;
}
