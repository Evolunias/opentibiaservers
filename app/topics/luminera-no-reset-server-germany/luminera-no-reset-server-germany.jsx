import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-no-reset-server-germany');
}

export default function LumineraNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="luminera-no-reset-server-germany" />;
}
