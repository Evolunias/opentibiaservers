import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibijka-login');
}

export default function NewTibijkaLoginKeywordPage() {
  return <StaticKeywordPage slug="new-tibijka-login" />;
}
