import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-mist-of-death-server');
}

export default function BaiakMistOfDeathServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-mist-of-death-server" />;
}
