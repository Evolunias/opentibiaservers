import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-aurera-global-ot-server');
}

export default function TopAureraGlobalOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-aurera-global-ot-server" />;
}
