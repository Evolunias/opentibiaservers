import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-0-fresh-start-server');
}

export default function Serenity80FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-0-fresh-start-server" />;
}
