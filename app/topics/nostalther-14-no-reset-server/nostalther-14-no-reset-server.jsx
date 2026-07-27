import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-14-no-reset-server');
}

export default function Nostalther14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-14-no-reset-server" />;
}
