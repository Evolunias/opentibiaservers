import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-aurera-global-login');
}

export default function FreshStartAureraGlobalLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-aurera-global-login" />;
}
