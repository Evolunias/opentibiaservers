import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-no-reset-server-sweden');
}

export default function ThorniaNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="thornia-no-reset-server-sweden" />;
}
