import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-tibia');
}

export default function HarmoniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-tibia" />;
}
