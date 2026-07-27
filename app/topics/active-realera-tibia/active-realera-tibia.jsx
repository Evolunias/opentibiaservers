import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realera-tibia');
}

export default function ActiveRealeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-realera-tibia" />;
}
