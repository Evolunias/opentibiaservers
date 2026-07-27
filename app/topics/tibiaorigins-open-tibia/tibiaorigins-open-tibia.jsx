import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-open-tibia');
}

export default function TibiaoriginsOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-open-tibia" />;
}
