import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-mist-of-death-official');
}

export default function BestMistOfDeathOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-mist-of-death-official" />;
}
