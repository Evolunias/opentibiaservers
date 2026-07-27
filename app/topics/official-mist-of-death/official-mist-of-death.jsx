import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-mist-of-death');
}

export default function OfficialMistOfDeathKeywordPage() {
  return <StaticKeywordPage slug="official-mist-of-death" />;
}
