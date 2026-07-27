import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nostalther-register');
}

export default function FreshStartNostaltherRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nostalther-register" />;
}
