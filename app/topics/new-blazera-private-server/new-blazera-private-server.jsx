import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-blazera-private-server');
}

export default function NewBlazeraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-blazera-private-server" />;
}
