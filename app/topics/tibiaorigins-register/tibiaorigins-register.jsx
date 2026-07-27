import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-register');
}

export default function TibiaoriginsRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-register" />;
}
