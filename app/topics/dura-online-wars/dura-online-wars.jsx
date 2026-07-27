import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-wars');
}

export default function DuraOnlineWarsKeywordPage() {
  return <StaticKeywordPage slug="dura-online-wars" />;
}
