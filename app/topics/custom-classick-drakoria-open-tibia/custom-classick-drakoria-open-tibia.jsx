import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classick-drakoria-open-tibia');
}

export default function CustomClassickDrakoriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-classick-drakoria-open-tibia" />;
}
