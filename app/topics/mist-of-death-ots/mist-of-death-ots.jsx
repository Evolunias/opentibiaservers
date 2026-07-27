import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-ots');
}

export default function MistOfDeathOtsKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-ots" />;
}
