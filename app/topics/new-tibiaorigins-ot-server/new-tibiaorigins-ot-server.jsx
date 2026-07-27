import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaorigins-ot-server');
}

export default function NewTibiaoriginsOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaorigins-ot-server" />;
}
