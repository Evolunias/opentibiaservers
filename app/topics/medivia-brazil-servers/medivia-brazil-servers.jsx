import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-brazil-servers');
}

export default function MediviaBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-brazil-servers" />;
}
