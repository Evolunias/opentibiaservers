import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolunia-ot');
}

export default function CustomEvoluniaOtKeywordPage() {
  return <StaticKeywordPage slug="custom-evolunia-ot" />;
}
