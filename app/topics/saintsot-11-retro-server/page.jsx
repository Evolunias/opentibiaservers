import Saintsot11RetroServerKeywordPage, { generateMetadata } from './saintsot-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot11RetroServerKeywordPage />;
}
