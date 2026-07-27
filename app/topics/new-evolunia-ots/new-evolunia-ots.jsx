import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolunia-ots');
}

export default function NewEvoluniaOtsKeywordPage() {
  return <StaticKeywordPage slug="new-evolunia-ots" />;
}
