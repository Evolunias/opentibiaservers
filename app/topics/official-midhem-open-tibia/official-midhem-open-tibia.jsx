import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-midhem-open-tibia');
}

export default function OfficialMidhemOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-midhem-open-tibia" />;
}
