import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classicus-open-tibia');
}

export default function ActiveClassicusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-classicus-open-tibia" />;
}
