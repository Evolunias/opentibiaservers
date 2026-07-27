import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-mist-of-death-client');
}

export default function CustomMistOfDeathClientKeywordPage() {
  return <StaticKeywordPage slug="custom-mist-of-death-client" />;
}
