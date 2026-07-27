import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eldera-open-tibia');
}

export default function ActiveElderaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-eldera-open-tibia" />;
}
