import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-10-0-no-reset-server');
}

export default function Nostalther100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-10-0-no-reset-server" />;
}
