import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classick-drakoria-register');
}

export default function NewClassickDrakoriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-classick-drakoria-register" />;
}
