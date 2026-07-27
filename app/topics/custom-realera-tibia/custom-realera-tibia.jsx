import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realera-tibia');
}

export default function CustomRealeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-realera-tibia" />;
}
