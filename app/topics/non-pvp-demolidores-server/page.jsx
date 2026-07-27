import NonPvpDemolidoresServerKeywordPage, { generateMetadata } from './non-pvp-demolidores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpDemolidoresServerKeywordPage />;
}
