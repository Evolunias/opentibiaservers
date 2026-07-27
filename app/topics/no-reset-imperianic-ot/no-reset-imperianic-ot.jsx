import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-imperianic-ot');
}

export default function NoResetImperianicOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-imperianic-ot" />;
}
