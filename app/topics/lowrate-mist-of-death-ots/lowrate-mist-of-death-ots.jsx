import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-mist-of-death-ots');
}

export default function LowrateMistOfDeathOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-mist-of-death-ots" />;
}
