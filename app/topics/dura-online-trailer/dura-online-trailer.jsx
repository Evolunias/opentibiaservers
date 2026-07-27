import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-trailer');
}

export default function DuraOnlineTrailerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-trailer" />;
}
