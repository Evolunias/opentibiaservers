import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-open-tibia-server-brazil');
}

export default function BaiakOpenTibiaServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="baiak-open-tibia-server-brazil" />;
}
