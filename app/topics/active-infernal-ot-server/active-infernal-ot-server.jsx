import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-infernal-ot-server');
}

export default function ActiveInfernalOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-infernal-ot-server" />;
}
