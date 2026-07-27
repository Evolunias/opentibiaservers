import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-9-6-no-reset-server');
}

export default function Kasteria96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-9-6-no-reset-server" />;
}
