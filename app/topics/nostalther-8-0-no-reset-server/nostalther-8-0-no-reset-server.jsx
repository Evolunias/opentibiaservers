import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-0-no-reset-server');
}

export default function Nostalther80NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-0-no-reset-server" />;
}
