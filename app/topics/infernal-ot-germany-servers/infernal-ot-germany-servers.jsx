import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-germany-servers');
}

export default function InfernalOtGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-germany-servers" />;
}
