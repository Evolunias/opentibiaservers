import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-infernal-ot-ot-server');
}

export default function ActiveInfernalOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-infernal-ot-ot-server" />;
}
