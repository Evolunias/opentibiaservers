import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realera-private-server');
}

export default function NewRealeraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-realera-private-server" />;
}
