import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-imperianic-register');
}

export default function NewImperianicRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-imperianic-register" />;
}
