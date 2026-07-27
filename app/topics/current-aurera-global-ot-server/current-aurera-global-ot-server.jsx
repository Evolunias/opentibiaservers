import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-aurera-global-ot-server');
}

export default function CurrentAureraGlobalOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-aurera-global-ot-server" />;
}
