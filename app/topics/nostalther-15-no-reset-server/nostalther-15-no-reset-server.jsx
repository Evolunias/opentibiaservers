import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-15-no-reset-server');
}

export default function Nostalther15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-15-no-reset-server" />;
}
