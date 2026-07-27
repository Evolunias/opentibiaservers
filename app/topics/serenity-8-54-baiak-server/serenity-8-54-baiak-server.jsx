import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-54-baiak-server');
}

export default function Serenity854BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-54-baiak-server" />;
}
