import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-harmonia-ot-ot-server');
}

export default function NewHarmoniaOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-harmonia-ot-ot-server" />;
}
