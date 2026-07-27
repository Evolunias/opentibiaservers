import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-4-fresh-start-server');
}

export default function Serenity74FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-4-fresh-start-server" />;
}
