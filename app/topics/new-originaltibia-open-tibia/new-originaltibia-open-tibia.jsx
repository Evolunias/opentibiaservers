import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-originaltibia-open-tibia');
}

export default function NewOriginaltibiaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-originaltibia-open-tibia" />;
}
