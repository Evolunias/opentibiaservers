import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-mist-of-death-ot');
}

export default function NoResetMistOfDeathOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-mist-of-death-ot" />;
}
