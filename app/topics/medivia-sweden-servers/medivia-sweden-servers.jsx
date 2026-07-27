import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-sweden-servers');
}

export default function MediviaSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-sweden-servers" />;
}
