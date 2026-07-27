import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-15-fresh-start-server');
}

export default function Serenity15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-15-fresh-start-server" />;
}
