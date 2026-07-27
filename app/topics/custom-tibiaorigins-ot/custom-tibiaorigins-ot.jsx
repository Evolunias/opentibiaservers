import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaorigins-ot');
}

export default function CustomTibiaoriginsOtKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaorigins-ot" />;
}
