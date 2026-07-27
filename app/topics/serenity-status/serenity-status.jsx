import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-status');
}

export default function SerenityStatusKeywordPage() {
  return <StaticKeywordPage slug="serenity-status" />;
}
