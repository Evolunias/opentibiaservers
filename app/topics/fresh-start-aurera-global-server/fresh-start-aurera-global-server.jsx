import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-aurera-global-server');
}

export default function FreshStartAureraGlobalServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-aurera-global-server" />;
}
