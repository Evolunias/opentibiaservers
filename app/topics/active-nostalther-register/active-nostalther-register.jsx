import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nostalther-register');
}

export default function ActiveNostaltherRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-nostalther-register" />;
}
