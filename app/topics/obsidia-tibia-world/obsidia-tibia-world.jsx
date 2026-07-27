import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('obsidia-tibia-world');
}

export default function ObsidiaTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="obsidia-tibia-world" />;
}
