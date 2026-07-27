import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-retro-server-south-america');
}

export default function ShadowcoresRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-retro-server-south-america" />;
}
