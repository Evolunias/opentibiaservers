import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-alastera-open-tibia');
}

export default function NewAlasteraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-alastera-open-tibia" />;
}
