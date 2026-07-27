import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-germany-server');
}

export default function SerenityGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-germany-server" />;
}
