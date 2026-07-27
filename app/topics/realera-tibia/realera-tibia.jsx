import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-tibia');
}

export default function RealeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="realera-tibia" />;
}
