import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-no-reset-server-canada');
}

export default function LumineraNoResetServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="luminera-no-reset-server-canada" />;
}
