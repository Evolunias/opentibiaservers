import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-6-no-reset-server');
}

export default function Blazera86NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-6-no-reset-server" />;
}
