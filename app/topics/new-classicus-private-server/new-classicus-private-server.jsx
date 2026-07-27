import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classicus-private-server');
}

export default function NewClassicusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-classicus-private-server" />;
}
