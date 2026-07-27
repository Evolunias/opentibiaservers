import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaorigins-login');
}

export default function NewTibiaoriginsLoginKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaorigins-login" />;
}
