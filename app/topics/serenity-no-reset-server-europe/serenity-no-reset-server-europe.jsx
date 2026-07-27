import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-no-reset-server-europe');
}

export default function SerenityNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="serenity-no-reset-server-europe" />;
}
