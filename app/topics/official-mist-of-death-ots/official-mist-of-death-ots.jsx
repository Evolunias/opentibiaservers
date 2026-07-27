import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-mist-of-death-ots');
}

export default function OfficialMistOfDeathOtsKeywordPage() {
  return <StaticKeywordPage slug="official-mist-of-death-ots" />;
}
