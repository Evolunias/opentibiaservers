import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-54-fresh-start-server');
}

export default function Serenity854FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-54-fresh-start-server" />;
}
