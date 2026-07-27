import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-mist-of-death-official');
}

export default function OfficialMistOfDeathOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-mist-of-death-official" />;
}
