import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-fresh-start-server-poland');
}

export default function MiracleFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="miracle-fresh-start-server-poland" />;
}
