import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaorigins-login');
}

export default function FreshStartTibiaoriginsLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaorigins-login" />;
}
