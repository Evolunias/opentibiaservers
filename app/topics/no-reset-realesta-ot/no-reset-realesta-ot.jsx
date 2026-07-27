import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realesta-ot');
}

export default function NoResetRealestaOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realesta-ot" />;
}
