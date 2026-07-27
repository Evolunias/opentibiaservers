import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-mist-of-death-private-server');
}

export default function FreshStartMistOfDeathPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-mist-of-death-private-server" />;
}
