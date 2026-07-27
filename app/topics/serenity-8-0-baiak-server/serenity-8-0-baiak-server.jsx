import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-0-baiak-server');
}

export default function Serenity80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-0-baiak-server" />;
}
