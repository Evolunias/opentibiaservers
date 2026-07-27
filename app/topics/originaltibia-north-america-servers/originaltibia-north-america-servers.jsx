import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-north-america-servers');
}

export default function OriginaltibiaNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-north-america-servers" />;
}
