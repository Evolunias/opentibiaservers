import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-tibia');
}

export default function NostaltherTibiaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-tibia" />;
}
