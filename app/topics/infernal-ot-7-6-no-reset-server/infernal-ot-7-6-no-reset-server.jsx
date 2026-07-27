import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-6-no-reset-server');
}

export default function InfernalOt76NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-6-no-reset-server" />;
}
