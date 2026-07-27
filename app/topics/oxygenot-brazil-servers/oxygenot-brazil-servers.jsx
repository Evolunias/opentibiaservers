import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-brazil-servers');
}

export default function OxygenotBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-brazil-servers" />;
}
