import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-13-no-reset-server');
}

export default function Nostalther13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-13-no-reset-server" />;
}
