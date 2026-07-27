import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-ot-server');
}

export default function AureraGlobalOtServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-ot-server" />;
}
