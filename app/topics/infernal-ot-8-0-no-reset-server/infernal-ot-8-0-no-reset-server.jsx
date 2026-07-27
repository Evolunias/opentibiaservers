import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-0-no-reset-server');
}

export default function InfernalOt80NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-0-no-reset-server" />;
}
