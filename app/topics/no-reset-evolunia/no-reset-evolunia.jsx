import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolunia');
}

export default function NoResetEvoluniaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolunia" />;
}
