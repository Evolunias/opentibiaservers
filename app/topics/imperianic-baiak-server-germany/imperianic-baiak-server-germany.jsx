import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-baiak-server-germany');
}

export default function ImperianicBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="imperianic-baiak-server-germany" />;
}
