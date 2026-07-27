import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-mexico-server');
}

export default function MediviaMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-mexico-server" />;
}
