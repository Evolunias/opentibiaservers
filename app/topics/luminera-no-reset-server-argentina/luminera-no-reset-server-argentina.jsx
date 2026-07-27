import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-no-reset-server-argentina');
}

export default function LumineraNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="luminera-no-reset-server-argentina" />;
}
