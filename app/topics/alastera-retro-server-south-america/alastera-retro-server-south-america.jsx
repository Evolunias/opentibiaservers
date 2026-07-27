import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-retro-server-south-america');
}

export default function AlasteraRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-retro-server-south-america" />;
}
