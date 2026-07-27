import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaorigins-ot');
}

export default function FreshStartTibiaoriginsOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaorigins-ot" />;
}
