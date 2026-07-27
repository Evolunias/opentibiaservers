import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-canada-servers');
}

export default function SerenityCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-canada-servers" />;
}
