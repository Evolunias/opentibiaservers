import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-low-exp-server-chile');
}

export default function ImperianicLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="imperianic-low-exp-server-chile" />;
}
