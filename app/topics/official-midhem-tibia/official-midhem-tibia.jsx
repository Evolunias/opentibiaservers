import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-midhem-tibia');
}

export default function OfficialMidhemTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-midhem-tibia" />;
}
