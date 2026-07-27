import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-sabrehaven-private-server');
}

export default function NewSabrehavenPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-sabrehaven-private-server" />;
}
