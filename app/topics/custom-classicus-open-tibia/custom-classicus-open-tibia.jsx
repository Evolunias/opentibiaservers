import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classicus-open-tibia');
}

export default function CustomClassicusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-classicus-open-tibia" />;
}
