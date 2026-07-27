import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-argentina-servers');
}

export default function InfernalOtArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-argentina-servers" />;
}
