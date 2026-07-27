import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-ot');
}

export default function TibiaoriginsOtKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-ot" />;
}
