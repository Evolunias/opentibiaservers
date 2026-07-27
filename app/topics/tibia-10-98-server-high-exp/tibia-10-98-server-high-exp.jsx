import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-server-high-exp');
}

export default function Tibia1098ServerHighExpKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-server-high-exp" />;
}
