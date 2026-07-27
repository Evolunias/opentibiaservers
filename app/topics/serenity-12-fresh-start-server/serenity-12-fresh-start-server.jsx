import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-12-fresh-start-server');
}

export default function Serenity12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-12-fresh-start-server" />;
}
