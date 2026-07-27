import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-72-no-reset-server');
}

export default function InfernalOt772NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-72-no-reset-server" />;
}
