import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-servers-poland');
}

export default function FreshStartServersPolandKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-servers-poland" />;
}
