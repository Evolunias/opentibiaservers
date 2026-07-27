import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-brazil-server');
}

export default function MediviaBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-brazil-server" />;
}
