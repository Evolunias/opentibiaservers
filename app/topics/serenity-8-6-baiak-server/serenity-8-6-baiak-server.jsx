import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-6-baiak-server');
}

export default function Serenity86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-6-baiak-server" />;
}
