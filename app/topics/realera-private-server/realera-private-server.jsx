import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-private-server');
}

export default function RealeraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="realera-private-server" />;
}
