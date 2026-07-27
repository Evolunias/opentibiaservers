import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-mist-of-death-ot-server');
}

export default function CurrentMistOfDeathOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-mist-of-death-ot-server" />;
}
