import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aldora-tibia');
}

export default function AldoraTibiaKeywordPage() {
  return <StaticKeywordPage slug="aldora-tibia" />;
}
