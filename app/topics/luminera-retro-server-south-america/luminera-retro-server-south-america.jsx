import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-retro-server-south-america');
}

export default function LumineraRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-retro-server-south-america" />;
}
