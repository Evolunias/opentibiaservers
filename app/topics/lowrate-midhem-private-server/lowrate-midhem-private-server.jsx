import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-midhem-private-server');
}

export default function LowrateMidhemPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-midhem-private-server" />;
}
