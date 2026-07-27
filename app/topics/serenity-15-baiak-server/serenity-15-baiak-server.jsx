import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-15-baiak-server');
}

export default function Serenity15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-15-baiak-server" />;
}
