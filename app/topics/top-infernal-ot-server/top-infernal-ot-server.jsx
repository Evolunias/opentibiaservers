import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-infernal-ot-server');
}

export default function TopInfernalOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-infernal-ot-server" />;
}
