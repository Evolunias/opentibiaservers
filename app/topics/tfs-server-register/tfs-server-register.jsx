import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tfs-server-register');
}

export default function TfsServerRegisterKeywordPage() {
  return <StaticKeywordPage slug="tfs-server-register" />;
}
