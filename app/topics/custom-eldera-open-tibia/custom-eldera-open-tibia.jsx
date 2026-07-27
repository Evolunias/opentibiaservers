import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eldera-open-tibia');
}

export default function CustomElderaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-eldera-open-tibia" />;
}
