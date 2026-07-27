import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-harmonia-ot-ot-server');
}

export default function CurrentHarmoniaOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-harmonia-ot-ot-server" />;
}
