import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-miracle-tibia');
}

export default function OfficialMiracleTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-miracle-tibia" />;
}
