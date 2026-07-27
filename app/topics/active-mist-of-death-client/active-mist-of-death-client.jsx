import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-mist-of-death-client');
}

export default function ActiveMistOfDeathClientKeywordPage() {
  return <StaticKeywordPage slug="active-mist-of-death-client" />;
}
