import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-brazil-servers');
}

export default function TibiaraBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-brazil-servers" />;
}
