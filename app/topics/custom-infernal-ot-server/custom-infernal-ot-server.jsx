import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-infernal-ot-server');
}

export default function CustomInfernalOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-infernal-ot-server" />;
}
