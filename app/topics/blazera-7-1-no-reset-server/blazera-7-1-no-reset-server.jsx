import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-1-no-reset-server');
}

export default function Blazera71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-1-no-reset-server" />;
}
