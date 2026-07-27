import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-serenity-server');
}

export default function BaiakSerenityServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-serenity-server" />;
}
