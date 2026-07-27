import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-usa-servers');
}

export default function OriginaltibiaUsaServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-usa-servers" />;
}
