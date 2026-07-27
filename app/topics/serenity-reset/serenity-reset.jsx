import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-reset');
}

export default function SerenityResetKeywordPage() {
  return <StaticKeywordPage slug="serenity-reset" />;
}
