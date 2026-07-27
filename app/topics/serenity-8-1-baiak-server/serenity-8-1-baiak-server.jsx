import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-1-baiak-server');
}

export default function Serenity81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-1-baiak-server" />;
}
