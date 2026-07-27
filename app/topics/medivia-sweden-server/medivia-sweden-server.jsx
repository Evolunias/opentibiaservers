import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-sweden-server');
}

export default function MediviaSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-sweden-server" />;
}
