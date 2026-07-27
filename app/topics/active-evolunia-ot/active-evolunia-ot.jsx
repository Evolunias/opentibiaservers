import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolunia-ot');
}

export default function ActiveEvoluniaOtKeywordPage() {
  return <StaticKeywordPage slug="active-evolunia-ot" />;
}
