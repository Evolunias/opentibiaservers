import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-14-no-reset-server');
}

export default function Blazera14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-14-no-reset-server" />;
}
