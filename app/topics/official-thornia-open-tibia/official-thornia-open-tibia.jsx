import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thornia-open-tibia');
}

export default function OfficialThorniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-thornia-open-tibia" />;
}
