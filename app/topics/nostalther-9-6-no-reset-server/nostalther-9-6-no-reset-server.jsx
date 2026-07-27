import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-9-6-no-reset-server');
}

export default function Nostalther96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-9-6-no-reset-server" />;
}
