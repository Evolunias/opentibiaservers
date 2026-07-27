import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaorigins-ot');
}

export default function ActiveTibiaoriginsOtKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaorigins-ot" />;
}
