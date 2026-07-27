import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-1-no-reset-server');
}

export default function Blazera81NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-1-no-reset-server" />;
}
