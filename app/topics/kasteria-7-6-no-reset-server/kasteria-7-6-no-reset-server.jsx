import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-6-no-reset-server');
}

export default function Kasteria76NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-6-no-reset-server" />;
}
