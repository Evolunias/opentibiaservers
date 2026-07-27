import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-no-reset-server-brazil');
}

export default function LumineraNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="luminera-no-reset-server-brazil" />;
}
