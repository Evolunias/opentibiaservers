import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-brazil-server');
}

export default function HarmoniaOtBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-brazil-server" />;
}
