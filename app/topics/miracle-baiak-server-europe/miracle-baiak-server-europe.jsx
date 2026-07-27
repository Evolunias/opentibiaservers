import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-baiak-server-europe');
}

export default function MiracleBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="miracle-baiak-server-europe" />;
}
