import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-harmonia-ot-server');
}

export default function NewHarmoniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-harmonia-ot-server" />;
}
