import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('quintera-tibia');
}

export default function QuinteraTibiaKeywordPage() {
  return <StaticKeywordPage slug="quintera-tibia" />;
}
