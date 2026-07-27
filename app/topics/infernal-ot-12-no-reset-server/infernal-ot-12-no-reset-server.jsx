import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-12-no-reset-server');
}

export default function InfernalOt12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-12-no-reset-server" />;
}
