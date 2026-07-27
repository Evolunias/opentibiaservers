import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-fun-server');
}

export default function InfernalOtFunServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-fun-server" />;
}
