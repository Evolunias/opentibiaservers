import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-infernal-ot-ot-server');
}

export default function TopInfernalOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-infernal-ot-ot-server" />;
}
