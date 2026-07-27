import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-no-reset-server-poland');
}

export default function LumineraNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="luminera-no-reset-server-poland" />;
}
