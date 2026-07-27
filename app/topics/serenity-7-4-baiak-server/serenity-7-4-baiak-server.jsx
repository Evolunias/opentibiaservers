import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-4-baiak-server');
}

export default function Serenity74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-4-baiak-server" />;
}
