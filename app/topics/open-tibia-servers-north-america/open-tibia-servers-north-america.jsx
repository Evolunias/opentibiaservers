import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-servers-north-america');
}

export default function OpenTibiaServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-servers-north-america" />;
}
