import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-mist-of-death-official');
}

export default function FreshStartMistOfDeathOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-mist-of-death-official" />;
}
