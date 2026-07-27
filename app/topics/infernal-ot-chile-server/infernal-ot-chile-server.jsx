import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-chile-server');
}

export default function InfernalOtChileServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-chile-server" />;
}
