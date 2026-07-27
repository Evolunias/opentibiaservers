import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-sweden-server');
}

export default function OriginaltibiaSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-sweden-server" />;
}
