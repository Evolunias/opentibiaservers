import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-10-98-baiak-server');
}

export default function Serenity1098BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-10-98-baiak-server" />;
}
