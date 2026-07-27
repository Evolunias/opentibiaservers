import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-mist-of-death-client');
}

export default function OfficialMistOfDeathClientKeywordPage() {
  return <StaticKeywordPage slug="official-mist-of-death-client" />;
}
