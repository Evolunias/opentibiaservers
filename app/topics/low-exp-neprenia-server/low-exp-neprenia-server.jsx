import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-neprenia-server');
}

export default function LowExpNepreniaServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-neprenia-server" />;
}
