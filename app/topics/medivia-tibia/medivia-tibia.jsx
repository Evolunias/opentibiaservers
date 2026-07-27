import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-tibia');
}

export default function MediviaTibiaKeywordPage() {
  return <StaticKeywordPage slug="medivia-tibia" />;
}
