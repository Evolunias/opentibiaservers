import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-servers-mexico');
}

export default function OpenTibiaServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-servers-mexico" />;
}
