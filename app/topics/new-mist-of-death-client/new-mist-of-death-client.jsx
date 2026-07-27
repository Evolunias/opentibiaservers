import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-mist-of-death-client');
}

export default function NewMistOfDeathClientKeywordPage() {
  return <StaticKeywordPage slug="new-mist-of-death-client" />;
}
