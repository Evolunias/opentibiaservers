import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-serenity-server');
}

export default function PopularSerenityServerKeywordPage() {
  return <StaticKeywordPage slug="popular-serenity-server" />;
}
