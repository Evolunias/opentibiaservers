import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-tibia');
}

export default function OlderaTibiaKeywordPage() {
  return <StaticKeywordPage slug="oldera-tibia" />;
}
