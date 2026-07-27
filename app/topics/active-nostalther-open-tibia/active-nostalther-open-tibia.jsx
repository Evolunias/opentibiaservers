import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nostalther-open-tibia');
}

export default function ActiveNostaltherOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-nostalther-open-tibia" />;
}
