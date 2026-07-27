import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-sweden-servers');
}

export default function InfernalOtSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-sweden-servers" />;
}
