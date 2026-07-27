import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-chile-server');
}

export default function HarmoniaOtChileServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-chile-server" />;
}
