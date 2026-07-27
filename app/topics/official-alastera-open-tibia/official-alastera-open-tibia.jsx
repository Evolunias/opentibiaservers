import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-alastera-open-tibia');
}

export default function OfficialAlasteraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-alastera-open-tibia" />;
}
