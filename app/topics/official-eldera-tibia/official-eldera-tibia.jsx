import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eldera-tibia');
}

export default function OfficialElderaTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-eldera-tibia" />;
}
