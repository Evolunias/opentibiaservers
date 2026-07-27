import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolunia-ots');
}

export default function NoResetEvoluniaOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolunia-ots" />;
}
