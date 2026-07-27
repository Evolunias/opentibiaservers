import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolunia-official');
}

export default function PopularEvoluniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-evolunia-official" />;
}
