import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-harmonia-ot-ot-server');
}

export default function CustomHarmoniaOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-harmonia-ot-ot-server" />;
}
