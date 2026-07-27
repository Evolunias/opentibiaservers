import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibianus-private-server');
}

export default function NewTibianusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-tibianus-private-server" />;
}
