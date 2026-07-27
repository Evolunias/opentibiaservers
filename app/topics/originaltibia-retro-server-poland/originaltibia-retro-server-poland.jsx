import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-retro-server-poland');
}

export default function OriginaltibiaRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-retro-server-poland" />;
}
