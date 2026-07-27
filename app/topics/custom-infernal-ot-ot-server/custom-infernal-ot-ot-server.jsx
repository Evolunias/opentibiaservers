import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-infernal-ot-ot-server');
}

export default function CustomInfernalOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-infernal-ot-ot-server" />;
}
