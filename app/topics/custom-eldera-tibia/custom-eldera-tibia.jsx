import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eldera-tibia');
}

export default function CustomElderaTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-eldera-tibia" />;
}
