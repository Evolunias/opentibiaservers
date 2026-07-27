import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oldera-tibia');
}

export default function OfficialOlderaTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-oldera-tibia" />;
}
