import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-private-server');
}

export default function SabrehavenPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-private-server" />;
}
