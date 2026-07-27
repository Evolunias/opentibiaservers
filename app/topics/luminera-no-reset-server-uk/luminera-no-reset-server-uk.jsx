import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-no-reset-server-uk');
}

export default function LumineraNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="luminera-no-reset-server-uk" />;
}
