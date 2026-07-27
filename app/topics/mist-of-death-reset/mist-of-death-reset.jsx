import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-reset');
}

export default function MistOfDeathResetKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-reset" />;
}
