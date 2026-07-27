import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-13-fresh-start-server');
}

export default function Serenity13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-13-fresh-start-server" />;
}
