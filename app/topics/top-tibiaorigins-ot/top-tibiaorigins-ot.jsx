import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaorigins-ot');
}

export default function TopTibiaoriginsOtKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaorigins-ot" />;
}
