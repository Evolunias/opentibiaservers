import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolunia-official');
}

export default function TopEvoluniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-evolunia-official" />;
}
