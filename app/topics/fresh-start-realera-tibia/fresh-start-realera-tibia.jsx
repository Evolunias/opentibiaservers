import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realera-tibia');
}

export default function FreshStartRealeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realera-tibia" />;
}
