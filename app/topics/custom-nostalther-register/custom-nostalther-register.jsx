import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nostalther-register');
}

export default function CustomNostaltherRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-nostalther-register" />;
}
