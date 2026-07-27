import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-open-tibia-server-europe');
}

export default function FreshStartOpenTibiaServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-open-tibia-server-europe" />;
}
