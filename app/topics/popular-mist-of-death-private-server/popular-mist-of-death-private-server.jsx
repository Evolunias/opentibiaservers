import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-mist-of-death-private-server');
}

export default function PopularMistOfDeathPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-mist-of-death-private-server" />;
}
