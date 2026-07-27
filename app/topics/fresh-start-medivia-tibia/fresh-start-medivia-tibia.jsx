import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-medivia-tibia');
}

export default function FreshStartMediviaTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-medivia-tibia" />;
}
