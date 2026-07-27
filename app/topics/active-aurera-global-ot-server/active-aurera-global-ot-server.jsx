import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-aurera-global-ot-server');
}

export default function ActiveAureraGlobalOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-aurera-global-ot-server" />;
}
