import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('obsidia-tibia');
}

export default function ObsidiaTibiaKeywordPage() {
  return <StaticKeywordPage slug="obsidia-tibia" />;
}
