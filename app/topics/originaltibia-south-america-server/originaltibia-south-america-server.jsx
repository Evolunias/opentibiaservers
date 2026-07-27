import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-south-america-server');
}

export default function OriginaltibiaSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-south-america-server" />;
}
