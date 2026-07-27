import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-low-exp-server-chile');
}

export default function SerenityLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="serenity-low-exp-server-chile" />;
}
