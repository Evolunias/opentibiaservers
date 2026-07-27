import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-servers-south-america');
}

export default function OpenTibiaServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-servers-south-america" />;
}
