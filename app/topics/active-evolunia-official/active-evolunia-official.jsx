import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolunia-official');
}

export default function ActiveEvoluniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-evolunia-official" />;
}
