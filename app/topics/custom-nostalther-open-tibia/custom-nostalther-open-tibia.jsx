import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nostalther-open-tibia');
}

export default function CustomNostaltherOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-nostalther-open-tibia" />;
}
