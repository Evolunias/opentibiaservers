import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-1-no-reset-server');
}

export default function Nostalther81NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-1-no-reset-server" />;
}
