import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-baiak-server-europe');
}

export default function MistOfDeathBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-baiak-server-europe" />;
}
