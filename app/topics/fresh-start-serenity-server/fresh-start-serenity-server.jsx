import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-serenity-server');
}

export default function FreshStartSerenityServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-serenity-server" />;
}
