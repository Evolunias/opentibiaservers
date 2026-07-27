import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolunia-ots');
}

export default function TopEvoluniaOtsKeywordPage() {
  return <StaticKeywordPage slug="top-evolunia-ots" />;
}
