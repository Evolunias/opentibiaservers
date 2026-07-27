import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-mist-of-death-official');
}

export default function LowrateMistOfDeathOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-mist-of-death-official" />;
}
