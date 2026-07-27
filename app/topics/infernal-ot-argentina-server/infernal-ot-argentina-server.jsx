import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-argentina-server');
}

export default function InfernalOtArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-argentina-server" />;
}
