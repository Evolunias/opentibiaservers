import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-south-america-servers');
}

export default function TibiascapeSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-south-america-servers" />;
}
