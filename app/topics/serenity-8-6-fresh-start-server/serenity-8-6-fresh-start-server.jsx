import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-6-fresh-start-server');
}

export default function Serenity86FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-6-fresh-start-server" />;
}
