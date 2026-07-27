import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-brazil-servers');
}

export default function OlderaBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-brazil-servers" />;
}
