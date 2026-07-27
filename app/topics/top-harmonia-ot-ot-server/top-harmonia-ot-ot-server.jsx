import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-harmonia-ot-ot-server');
}

export default function TopHarmoniaOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-harmonia-ot-ot-server" />;
}
