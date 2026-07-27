import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-europe-servers');
}

export default function MistOfDeathEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-europe-servers" />;
}
