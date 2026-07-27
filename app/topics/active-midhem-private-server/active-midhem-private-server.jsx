import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-midhem-private-server');
}

export default function ActiveMidhemPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-midhem-private-server" />;
}
