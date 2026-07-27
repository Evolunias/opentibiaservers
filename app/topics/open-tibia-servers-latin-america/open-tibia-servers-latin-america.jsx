import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-servers-latin-america');
}

export default function OpenTibiaServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-servers-latin-america" />;
}
