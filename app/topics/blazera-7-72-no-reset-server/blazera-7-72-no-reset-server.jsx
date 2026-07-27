import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-72-no-reset-server');
}

export default function Blazera772NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-72-no-reset-server" />;
}
