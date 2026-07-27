import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death');
}

export default function MistOfDeathKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death" />;
}
