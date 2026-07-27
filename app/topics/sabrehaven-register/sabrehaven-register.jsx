import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-register');
}

export default function SabrehavenRegisterKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-register" />;
}
