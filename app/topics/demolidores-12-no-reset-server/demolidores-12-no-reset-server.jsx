import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-12-no-reset-server');
}

export default function Demolidores12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-12-no-reset-server" />;
}
