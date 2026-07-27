import PvpDemolidoresServerKeywordPage, { generateMetadata } from './pvp-demolidores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpDemolidoresServerKeywordPage />;
}
