import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-9-6-no-reset-server');
}

export default function Blazera96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-9-6-no-reset-server" />;
}
