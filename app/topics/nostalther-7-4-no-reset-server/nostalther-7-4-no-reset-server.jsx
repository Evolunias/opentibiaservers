import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-7-4-no-reset-server');
}

export default function Nostalther74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-7-4-no-reset-server" />;
}
