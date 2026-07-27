import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eldera-open-tibia');
}

export default function NewElderaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-eldera-open-tibia" />;
}
