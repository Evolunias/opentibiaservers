import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-harmonia-ot-server');
}

export default function CustomHarmoniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-harmonia-ot-server" />;
}
