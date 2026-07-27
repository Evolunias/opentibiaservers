import PvpTibiaoriginsServerKeywordPage, { generateMetadata } from './pvp-tibiaorigins-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpTibiaoriginsServerKeywordPage />;
}
