import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-south-america-servers');
}

export default function OriginaltibiaSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-south-america-servers" />;
}
