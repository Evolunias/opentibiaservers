import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-alastera-private-server');
}

export default function NoResetAlasteraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-alastera-private-server" />;
}
