import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-north-america-server');
}

export default function MediviaNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-north-america-server" />;
}
