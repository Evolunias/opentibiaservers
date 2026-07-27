import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-mist-of-death');
}

export default function NoResetMistOfDeathKeywordPage() {
  return <StaticKeywordPage slug="no-reset-mist-of-death" />;
}
