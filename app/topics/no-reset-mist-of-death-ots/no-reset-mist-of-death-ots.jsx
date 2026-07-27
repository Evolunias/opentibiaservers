import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-mist-of-death-ots');
}

export default function NoResetMistOfDeathOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-mist-of-death-ots" />;
}
