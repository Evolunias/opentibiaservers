import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-mist-of-death-ot-server');
}

export default function OfficialMistOfDeathOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-mist-of-death-ot-server" />;
}
