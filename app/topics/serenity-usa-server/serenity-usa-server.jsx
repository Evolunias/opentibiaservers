import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-usa-server');
}

export default function SerenityUsaServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-usa-server" />;
}
