import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-kasteria-login');
}

export default function NewKasteriaLoginKeywordPage() {
  return <StaticKeywordPage slug="new-kasteria-login" />;
}
