import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-harmonia-ot-ot-server');
}

export default function ActiveHarmoniaOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-harmonia-ot-ot-server" />;
}
