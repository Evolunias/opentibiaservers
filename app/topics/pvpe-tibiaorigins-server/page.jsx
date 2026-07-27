import PvpeTibiaoriginsServerKeywordPage, { generateMetadata } from './pvpe-tibiaorigins-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeTibiaoriginsServerKeywordPage />;
}
