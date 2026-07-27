import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-10-0-no-reset-server');
}

export default function InfernalOt100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-10-0-no-reset-server" />;
}
