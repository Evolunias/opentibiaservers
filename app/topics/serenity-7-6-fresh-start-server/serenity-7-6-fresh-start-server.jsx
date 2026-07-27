import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-6-fresh-start-server');
}

export default function Serenity76FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-6-fresh-start-server" />;
}
