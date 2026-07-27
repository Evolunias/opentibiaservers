import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaorigins-login');
}

export default function CustomTibiaoriginsLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaorigins-login" />;
}
