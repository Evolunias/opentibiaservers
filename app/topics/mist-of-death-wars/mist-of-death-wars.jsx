import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-wars');
}

export default function MistOfDeathWarsKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-wars" />;
}
