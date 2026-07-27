import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolunia-ots');
}

export default function ActiveEvoluniaOtsKeywordPage() {
  return <StaticKeywordPage slug="active-evolunia-ots" />;
}
