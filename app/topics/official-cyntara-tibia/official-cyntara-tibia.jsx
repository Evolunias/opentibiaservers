import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-cyntara-tibia');
}

export default function OfficialCyntaraTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-cyntara-tibia" />;
}
