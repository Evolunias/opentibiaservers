import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-open-tibia-server-germany');
}

export default function FreshStartOpenTibiaServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-open-tibia-server-germany" />;
}
