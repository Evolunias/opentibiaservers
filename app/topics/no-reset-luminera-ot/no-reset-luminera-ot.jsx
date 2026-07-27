import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-luminera-ot');
}

export default function NoResetLumineraOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-luminera-ot" />;
}
