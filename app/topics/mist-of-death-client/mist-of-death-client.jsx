import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-client');
}

export default function MistOfDeathClientKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-client" />;
}
