import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-4-no-reset-server');
}

export default function Blazera84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-4-no-reset-server" />;
}
