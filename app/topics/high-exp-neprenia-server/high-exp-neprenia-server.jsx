import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-neprenia-server');
}

export default function HighExpNepreniaServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-neprenia-server" />;
}
