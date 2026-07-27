import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-6-no-reset-server');
}

export default function Nostalther86NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-6-no-reset-server" />;
}
