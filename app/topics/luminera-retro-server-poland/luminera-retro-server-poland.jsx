import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-retro-server-poland');
}

export default function LumineraRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="luminera-retro-server-poland" />;
}
