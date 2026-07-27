import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-open-tibia');
}

export default function NostaltherOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-open-tibia" />;
}
