import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-alastera-server');
}

export default function NoResetAlasteraServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-alastera-server" />;
}
