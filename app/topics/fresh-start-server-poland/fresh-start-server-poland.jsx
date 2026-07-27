import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-server-poland');
}

export default function FreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-server-poland" />;
}
