import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-brazil-server');
}

export default function InfernalOtBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-brazil-server" />;
}
