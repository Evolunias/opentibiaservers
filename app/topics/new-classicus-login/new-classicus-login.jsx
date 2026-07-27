import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classicus-login');
}

export default function NewClassicusLoginKeywordPage() {
  return <StaticKeywordPage slug="new-classicus-login" />;
}
