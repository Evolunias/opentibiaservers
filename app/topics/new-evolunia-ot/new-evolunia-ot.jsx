import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolunia-ot');
}

export default function NewEvoluniaOtKeywordPage() {
  return <StaticKeywordPage slug="new-evolunia-ot" />;
}
