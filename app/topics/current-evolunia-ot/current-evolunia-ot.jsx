import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolunia-ot');
}

export default function CurrentEvoluniaOtKeywordPage() {
  return <StaticKeywordPage slug="current-evolunia-ot" />;
}
