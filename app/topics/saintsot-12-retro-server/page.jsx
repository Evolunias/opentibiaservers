import Saintsot12RetroServerKeywordPage, { generateMetadata } from './saintsot-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot12RetroServerKeywordPage />;
}
