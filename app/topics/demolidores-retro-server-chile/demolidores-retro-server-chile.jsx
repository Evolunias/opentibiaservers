import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-retro-server-chile');
}

export default function DemolidoresRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="demolidores-retro-server-chile" />;
}
