import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaorigins-open-tibia');
}

export default function NewTibiaoriginsOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaorigins-open-tibia" />;
}
