import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-servers-canada');
}

export default function OpenTibiaServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-servers-canada" />;
}
