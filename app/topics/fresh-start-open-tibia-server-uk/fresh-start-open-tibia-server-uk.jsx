import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-open-tibia-server-uk');
}

export default function FreshStartOpenTibiaServerUkKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-open-tibia-server-uk" />;
}
