import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-open-tibia');
}

export default function AlasteraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="alastera-open-tibia" />;
}
