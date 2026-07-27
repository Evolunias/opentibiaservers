import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibianus-login');
}

export default function NewTibianusLoginKeywordPage() {
  return <StaticKeywordPage slug="new-tibianus-login" />;
}
