import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-low-exp-server-chile');
}

export default function NostaltherLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="nostalther-low-exp-server-chile" />;
}
