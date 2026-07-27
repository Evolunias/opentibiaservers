import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolunia-ots');
}

export default function CustomEvoluniaOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-evolunia-ots" />;
}
