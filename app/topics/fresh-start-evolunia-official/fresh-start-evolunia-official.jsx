import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolunia-official');
}

export default function FreshStartEvoluniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolunia-official" />;
}
