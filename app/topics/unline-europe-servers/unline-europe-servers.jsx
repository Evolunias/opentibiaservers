import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-europe-servers');
}

export default function UnlineEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="unline-europe-servers" />;
}
