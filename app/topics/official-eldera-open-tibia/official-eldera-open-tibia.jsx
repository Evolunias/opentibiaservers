import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eldera-open-tibia');
}

export default function OfficialElderaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-eldera-open-tibia" />;
}
