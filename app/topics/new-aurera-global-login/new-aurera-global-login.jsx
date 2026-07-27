import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-aurera-global-login');
}

export default function NewAureraGlobalLoginKeywordPage() {
  return <StaticKeywordPage slug="new-aurera-global-login" />;
}
