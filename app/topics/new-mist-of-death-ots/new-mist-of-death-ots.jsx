import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-mist-of-death-ots');
}

export default function NewMistOfDeathOtsKeywordPage() {
  return <StaticKeywordPage slug="new-mist-of-death-ots" />;
}
