import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-brazil-servers');
}

export default function InfernalOtBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-brazil-servers" />;
}
