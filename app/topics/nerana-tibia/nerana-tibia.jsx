import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nerana-tibia');
}

export default function NeranaTibiaKeywordPage() {
  return <StaticKeywordPage slug="nerana-tibia" />;
}
