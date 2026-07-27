import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiantis-official');
}

export default function FreshStartTibiantisOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiantis-official" />;
}
