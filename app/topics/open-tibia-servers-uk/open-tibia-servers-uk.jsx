import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-servers-uk');
}

export default function OpenTibiaServersUkKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-servers-uk" />;
}
