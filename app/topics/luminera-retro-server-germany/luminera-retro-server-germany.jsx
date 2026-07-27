import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-retro-server-germany');
}

export default function LumineraRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="luminera-retro-server-germany" />;
}
