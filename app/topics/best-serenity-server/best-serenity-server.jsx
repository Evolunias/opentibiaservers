import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-serenity-server');
}

export default function BestSerenityServerKeywordPage() {
  return <StaticKeywordPage slug="best-serenity-server" />;
}
