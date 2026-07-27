import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-low-exp-server-chile');
}

export default function MistOfDeathLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-low-exp-server-chile" />;
}
