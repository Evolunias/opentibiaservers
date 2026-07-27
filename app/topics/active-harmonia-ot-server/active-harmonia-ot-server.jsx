import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-harmonia-ot-server');
}

export default function ActiveHarmoniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-harmonia-ot-server" />;
}
