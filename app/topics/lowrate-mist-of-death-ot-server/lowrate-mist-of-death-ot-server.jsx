import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-mist-of-death-ot-server');
}

export default function LowrateMistOfDeathOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-mist-of-death-ot-server" />;
}
