import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-10-98-fresh-start-server');
}

export default function Serenity1098FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-10-98-fresh-start-server" />;
}
