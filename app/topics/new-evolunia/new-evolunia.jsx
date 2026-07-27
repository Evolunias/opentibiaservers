import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolunia');
}

export default function NewEvoluniaKeywordPage() {
  return <StaticKeywordPage slug="new-evolunia" />;
}
