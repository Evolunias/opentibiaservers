import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-11-no-reset-server');
}

export default function Blazera11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-11-no-reset-server" />;
}
