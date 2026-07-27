import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eldera-private-server');
}

export default function NewElderaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-eldera-private-server" />;
}
