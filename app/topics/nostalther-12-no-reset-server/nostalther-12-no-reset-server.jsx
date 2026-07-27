import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-12-no-reset-server');
}

export default function Nostalther12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-12-no-reset-server" />;
}
