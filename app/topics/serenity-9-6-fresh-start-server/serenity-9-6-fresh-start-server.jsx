import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-9-6-fresh-start-server');
}

export default function Serenity96FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-9-6-fresh-start-server" />;
}
