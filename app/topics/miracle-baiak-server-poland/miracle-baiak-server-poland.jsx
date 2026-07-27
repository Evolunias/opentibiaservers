import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-baiak-server-poland');
}

export default function MiracleBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="miracle-baiak-server-poland" />;
}
