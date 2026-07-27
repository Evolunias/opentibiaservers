import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-4-no-reset-server');
}

export default function Blazera74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-4-no-reset-server" />;
}
