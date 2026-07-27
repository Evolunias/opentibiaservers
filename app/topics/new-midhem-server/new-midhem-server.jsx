import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-midhem-server');
}

export default function NewMidhemServerKeywordPage() {
  return <StaticKeywordPage slug="new-midhem-server" />;
}
