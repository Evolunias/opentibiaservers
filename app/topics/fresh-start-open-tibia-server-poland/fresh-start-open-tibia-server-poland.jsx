import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-open-tibia-server-poland');
}

export default function FreshStartOpenTibiaServerPolandKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-open-tibia-server-poland" />;
}
