import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-open-tibia-server-mexico');
}

export default function BaiakOpenTibiaServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="baiak-open-tibia-server-mexico" />;
}
