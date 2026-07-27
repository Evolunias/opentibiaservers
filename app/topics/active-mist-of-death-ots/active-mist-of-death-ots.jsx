import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-mist-of-death-ots');
}

export default function ActiveMistOfDeathOtsKeywordPage() {
  return <StaticKeywordPage slug="active-mist-of-death-ots" />;
}
