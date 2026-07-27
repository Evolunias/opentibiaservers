import Saintsot13RetroServerKeywordPage, { generateMetadata } from './saintsot-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot13RetroServerKeywordPage />;
}
