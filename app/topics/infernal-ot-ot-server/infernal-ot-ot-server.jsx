import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-ot-server');
}

export default function InfernalOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-ot-server" />;
}
