import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-open-tibia-server-argentina');
}

export default function BaiakOpenTibiaServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="baiak-open-tibia-server-argentina" />;
}
