import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaorigins-login');
}

export default function LowrateTibiaoriginsLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaorigins-login" />;
}
