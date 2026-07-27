import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-europe-servers');
}

export default function OxygenotEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-europe-servers" />;
}
