import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-10-0-no-reset-server');
}

export default function Blazera100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-10-0-no-reset-server" />;
}
