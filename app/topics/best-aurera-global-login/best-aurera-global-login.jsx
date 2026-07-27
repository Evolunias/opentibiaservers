import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-aurera-global-login');
}

export default function BestAureraGlobalLoginKeywordPage() {
  return <StaticKeywordPage slug="best-aurera-global-login" />;
}
