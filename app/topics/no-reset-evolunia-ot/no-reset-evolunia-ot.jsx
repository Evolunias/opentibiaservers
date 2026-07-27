import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolunia-ot');
}

export default function NoResetEvoluniaOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolunia-ot" />;
}
