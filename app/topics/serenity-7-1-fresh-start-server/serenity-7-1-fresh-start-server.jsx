import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-1-fresh-start-server');
}

export default function Serenity71FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-1-fresh-start-server" />;
}
