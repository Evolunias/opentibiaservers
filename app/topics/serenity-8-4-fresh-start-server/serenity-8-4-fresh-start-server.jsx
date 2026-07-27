import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-4-fresh-start-server');
}

export default function Serenity84FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-4-fresh-start-server" />;
}
