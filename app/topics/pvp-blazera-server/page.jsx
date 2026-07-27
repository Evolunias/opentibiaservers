import PvpBlazeraServerKeywordPage, { generateMetadata } from './pvp-blazera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpBlazeraServerKeywordPage />;
}
