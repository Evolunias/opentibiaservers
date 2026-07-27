import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-13-baiak-server');
}

export default function Serenity13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-13-baiak-server" />;
}
