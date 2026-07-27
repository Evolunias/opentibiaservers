import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thornia-tibia');
}

export default function OfficialThorniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-thornia-tibia" />;
}
