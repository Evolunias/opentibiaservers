import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-sweden-servers');
}

export default function OriginaltibiaSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-sweden-servers" />;
}
