import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-medivia-tibia');
}

export default function NewMediviaTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-medivia-tibia" />;
}
