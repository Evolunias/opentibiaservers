import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-aurera-global-ot-server');
}

export default function FreshStartAureraGlobalOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-aurera-global-ot-server" />;
}
