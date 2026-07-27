import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ocera-tibia');
}

export default function OceraTibiaKeywordPage() {
  return <StaticKeywordPage slug="ocera-tibia" />;
}
