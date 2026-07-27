import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-low-exp-server-chile');
}

export default function TibiaoriginsLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-low-exp-server-chile" />;
}
