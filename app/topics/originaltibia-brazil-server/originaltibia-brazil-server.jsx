import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-brazil-server');
}

export default function OriginaltibiaBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-brazil-server" />;
}
