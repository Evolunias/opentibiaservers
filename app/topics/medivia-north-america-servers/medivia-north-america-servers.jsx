import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-north-america-servers');
}

export default function MediviaNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-north-america-servers" />;
}
