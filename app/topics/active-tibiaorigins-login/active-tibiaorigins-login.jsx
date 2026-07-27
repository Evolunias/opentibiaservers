import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaorigins-login');
}

export default function ActiveTibiaoriginsLoginKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaorigins-login" />;
}
