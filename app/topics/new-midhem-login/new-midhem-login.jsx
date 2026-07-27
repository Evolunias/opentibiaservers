import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-midhem-login');
}

export default function NewMidhemLoginKeywordPage() {
  return <StaticKeywordPage slug="new-midhem-login" />;
}
