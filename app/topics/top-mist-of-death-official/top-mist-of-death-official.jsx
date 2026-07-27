import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-mist-of-death-official');
}

export default function TopMistOfDeathOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-mist-of-death-official" />;
}
