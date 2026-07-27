import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neptera-tibia');
}

export default function NepteraTibiaKeywordPage() {
  return <StaticKeywordPage slug="neptera-tibia" />;
}
