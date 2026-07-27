import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-mist-of-death-server');
}

export default function BestMistOfDeathServerKeywordPage() {
  return <StaticKeywordPage slug="best-mist-of-death-server" />;
}
