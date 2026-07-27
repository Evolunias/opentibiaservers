import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realera-tibia');
}

export default function NewRealeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-realera-tibia" />;
}
