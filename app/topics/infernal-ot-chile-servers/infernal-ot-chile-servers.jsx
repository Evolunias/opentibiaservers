import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-chile-servers');
}

export default function InfernalOtChileServersKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-chile-servers" />;
}
