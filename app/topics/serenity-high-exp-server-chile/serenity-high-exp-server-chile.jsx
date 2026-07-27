import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-high-exp-server-chile');
}

export default function SerenityHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="serenity-high-exp-server-chile" />;
}
