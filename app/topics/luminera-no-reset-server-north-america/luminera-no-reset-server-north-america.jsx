import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-no-reset-server-north-america');
}

export default function LumineraNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-no-reset-server-north-america" />;
}
