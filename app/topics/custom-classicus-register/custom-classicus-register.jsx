import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classicus-register');
}

export default function CustomClassicusRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-classicus-register" />;
}
