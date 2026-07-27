import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-brazil-servers');
}

export default function OriginaltibiaBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-brazil-servers" />;
}
