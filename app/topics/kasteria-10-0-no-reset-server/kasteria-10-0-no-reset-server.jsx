import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-10-0-no-reset-server');
}

export default function Kasteria100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-10-0-no-reset-server" />;
}
