import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaorigins-login');
}

export default function TopTibiaoriginsLoginKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaorigins-login" />;
}
