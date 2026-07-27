import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-register');
}

export default function NostaltherRegisterKeywordPage() {
  return <StaticKeywordPage slug="nostalther-register" />;
}
