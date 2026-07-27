import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-mist-of-death-private-server');
}

export default function BestMistOfDeathPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-mist-of-death-private-server" />;
}
