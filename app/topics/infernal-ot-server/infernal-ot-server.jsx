import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-server');
}

export default function InfernalOtServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-server" />;
}
