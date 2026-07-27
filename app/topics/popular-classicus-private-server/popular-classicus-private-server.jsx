import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classicus-private-server');
}

export default function PopularClassicusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-classicus-private-server" />;
}
