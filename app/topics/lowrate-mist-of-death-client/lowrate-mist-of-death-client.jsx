import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-mist-of-death-client');
}

export default function LowrateMistOfDeathClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-mist-of-death-client" />;
}
