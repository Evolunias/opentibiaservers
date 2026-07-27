import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-72-baiak-server');
}

export default function Serenity772BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-72-baiak-server" />;
}
