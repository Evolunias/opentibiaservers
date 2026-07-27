import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-south-america-server');
}

export default function TibiascapeSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-south-america-server" />;
}
