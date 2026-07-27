import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-server-list-launch');
}

export default function OtServerListLaunchKeywordPage() {
  return <StaticKeywordPage slug="ot-server-list-launch" />;
}
