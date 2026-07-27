import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-infernal-ot-ot-server');
}

export default function CurrentInfernalOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-infernal-ot-ot-server" />;
}
