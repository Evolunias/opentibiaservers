import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('vinera-tibia');
}

export default function VineraTibiaKeywordPage() {
  return <StaticKeywordPage slug="vinera-tibia" />;
}
