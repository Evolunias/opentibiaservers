import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-13-no-reset-server');
}

export default function InfernalOt13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-13-no-reset-server" />;
}
