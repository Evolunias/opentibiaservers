import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-11-no-reset-server');
}

export default function Nostalther11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-11-no-reset-server" />;
}
