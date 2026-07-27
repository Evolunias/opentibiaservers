import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-fun-server');
}

export default function HarmoniaOtFunServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-fun-server" />;
}
