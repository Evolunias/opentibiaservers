import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-10-0-baiak-server');
}

export default function Serenity100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-10-0-baiak-server" />;
}
