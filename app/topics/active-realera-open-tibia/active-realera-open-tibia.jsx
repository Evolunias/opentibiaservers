import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realera-open-tibia');
}

export default function ActiveRealeraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-realera-open-tibia" />;
}
