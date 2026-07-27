import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-serenity-server');
}

export default function TopSerenityServerKeywordPage() {
  return <StaticKeywordPage slug="top-serenity-server" />;
}
