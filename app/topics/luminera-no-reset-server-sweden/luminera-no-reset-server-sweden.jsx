import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-no-reset-server-sweden');
}

export default function LumineraNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="luminera-no-reset-server-sweden" />;
}
