import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-mexico-servers');
}

export default function MediviaMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-mexico-servers" />;
}
