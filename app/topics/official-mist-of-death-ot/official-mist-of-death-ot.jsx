import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-mist-of-death-ot');
}

export default function OfficialMistOfDeathOtKeywordPage() {
  return <StaticKeywordPage slug="official-mist-of-death-ot" />;
}
