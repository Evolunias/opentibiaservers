import Saintsot15RetroServerKeywordPage, { generateMetadata } from './saintsot-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot15RetroServerKeywordPage />;
}
