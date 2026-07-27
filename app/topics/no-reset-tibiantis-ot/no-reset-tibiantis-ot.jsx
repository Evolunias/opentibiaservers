import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiantis-ot');
}

export default function NoResetTibiantisOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiantis-ot" />;
}
