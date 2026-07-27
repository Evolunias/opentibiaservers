import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolunia-official');
}

export default function NoResetEvoluniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolunia-official" />;
}
