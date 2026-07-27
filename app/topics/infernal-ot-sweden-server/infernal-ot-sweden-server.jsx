import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-sweden-server');
}

export default function InfernalOtSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-sweden-server" />;
}
