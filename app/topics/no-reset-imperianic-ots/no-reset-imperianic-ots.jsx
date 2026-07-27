import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-imperianic-ots');
}

export default function NoResetImperianicOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-imperianic-ots" />;
}
