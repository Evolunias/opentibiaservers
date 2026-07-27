import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-blazera-tibia');
}

export default function FreshStartBlazeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-blazera-tibia" />;
}
