import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-mist-of-death-ots');
}

export default function CustomMistOfDeathOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-mist-of-death-ots" />;
}
