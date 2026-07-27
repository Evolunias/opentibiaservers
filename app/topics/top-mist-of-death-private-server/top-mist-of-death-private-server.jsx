import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-mist-of-death-private-server');
}

export default function TopMistOfDeathPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-mist-of-death-private-server" />;
}
