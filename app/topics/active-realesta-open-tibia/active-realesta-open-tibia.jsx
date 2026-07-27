import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realesta-open-tibia');
}

export default function ActiveRealestaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-realesta-open-tibia" />;
}
