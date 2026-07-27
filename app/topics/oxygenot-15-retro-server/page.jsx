import Oxygenot15RetroServerKeywordPage, { generateMetadata } from './oxygenot-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oxygenot15RetroServerKeywordPage />;
}
