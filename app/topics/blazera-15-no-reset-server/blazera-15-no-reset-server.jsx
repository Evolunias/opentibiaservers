import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-15-no-reset-server');
}

export default function Blazera15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-15-no-reset-server" />;
}
