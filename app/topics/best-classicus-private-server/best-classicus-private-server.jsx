import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classicus-private-server');
}

export default function BestClassicusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-classicus-private-server" />;
}
