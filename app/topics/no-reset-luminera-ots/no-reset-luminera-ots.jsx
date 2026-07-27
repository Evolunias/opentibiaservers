import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-luminera-ots');
}

export default function NoResetLumineraOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-luminera-ots" />;
}
