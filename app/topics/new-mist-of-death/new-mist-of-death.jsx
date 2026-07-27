import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-mist-of-death');
}

export default function NewMistOfDeathKeywordPage() {
  return <StaticKeywordPage slug="new-mist-of-death" />;
}
