import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-mist-of-death');
}

export default function ActiveMistOfDeathKeywordPage() {
  return <StaticKeywordPage slug="active-mist-of-death" />;
}
