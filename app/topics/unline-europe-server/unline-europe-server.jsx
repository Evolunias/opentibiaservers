import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-europe-server');
}

export default function UnlineEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="unline-europe-server" />;
}
