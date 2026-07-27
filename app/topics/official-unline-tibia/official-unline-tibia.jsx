import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-unline-tibia');
}

export default function OfficialUnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-unline-tibia" />;
}
