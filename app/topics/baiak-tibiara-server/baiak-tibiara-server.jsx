import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-tibiara-server');
}

export default function BaiakTibiaraServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-tibiara-server" />;
}
