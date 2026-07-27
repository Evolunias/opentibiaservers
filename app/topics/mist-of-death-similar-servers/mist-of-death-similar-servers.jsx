import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-similar-servers');
}

export default function MistOfDeathSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-similar-servers" />;
}
