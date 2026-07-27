import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-kasteria-private-server');
}

export default function NewKasteriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-kasteria-private-server" />;
}
