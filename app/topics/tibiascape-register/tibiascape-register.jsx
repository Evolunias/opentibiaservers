import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-register');
}

export default function TibiascapeRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-register" />;
}
