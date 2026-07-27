import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaorigins-ot');
}

export default function LowrateTibiaoriginsOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaorigins-ot" />;
}
