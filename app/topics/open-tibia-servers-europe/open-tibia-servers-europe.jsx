import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-servers-europe');
}

export default function OpenTibiaServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-servers-europe" />;
}
