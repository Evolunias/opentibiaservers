import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-medivia-tibia');
}

export default function ActiveMediviaTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-medivia-tibia" />;
}
