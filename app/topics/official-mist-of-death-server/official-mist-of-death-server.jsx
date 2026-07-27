import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-mist-of-death-server');
}

export default function OfficialMistOfDeathServerKeywordPage() {
  return <StaticKeywordPage slug="official-mist-of-death-server" />;
}
