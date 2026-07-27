import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-infernal-ot-ot-server');
}

export default function NewInfernalOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-infernal-ot-ot-server" />;
}
