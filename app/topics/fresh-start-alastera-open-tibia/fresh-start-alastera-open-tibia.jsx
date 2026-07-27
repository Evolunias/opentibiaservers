import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-alastera-open-tibia');
}

export default function FreshStartAlasteraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-alastera-open-tibia" />;
}
