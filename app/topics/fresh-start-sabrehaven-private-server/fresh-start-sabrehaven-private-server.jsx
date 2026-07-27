import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-sabrehaven-private-server');
}

export default function FreshStartSabrehavenPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-sabrehaven-private-server" />;
}
