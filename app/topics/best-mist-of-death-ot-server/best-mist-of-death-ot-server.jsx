import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-mist-of-death-ot-server');
}

export default function BestMistOfDeathOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-mist-of-death-ot-server" />;
}
