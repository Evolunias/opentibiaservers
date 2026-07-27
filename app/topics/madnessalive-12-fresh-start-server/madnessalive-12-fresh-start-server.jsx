import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-12-fresh-start-server');
}

export default function Madnessalive12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-12-fresh-start-server" />;
}
