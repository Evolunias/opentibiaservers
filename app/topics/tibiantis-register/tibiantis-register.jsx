import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-register');
}

export default function TibiantisRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-register" />;
}
