import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaorigins-ot');
}

export default function CurrentTibiaoriginsOtKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaorigins-ot" />;
}
