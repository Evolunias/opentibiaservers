import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-12-no-reset-server');
}

export default function Blazera12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-12-no-reset-server" />;
}
