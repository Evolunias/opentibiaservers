import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-baiak-server-uk');
}

export default function MiracleBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="miracle-baiak-server-uk" />;
}
