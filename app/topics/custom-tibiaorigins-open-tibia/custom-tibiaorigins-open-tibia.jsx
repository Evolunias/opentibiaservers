import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaorigins-open-tibia');
}

export default function CustomTibiaoriginsOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaorigins-open-tibia" />;
}
