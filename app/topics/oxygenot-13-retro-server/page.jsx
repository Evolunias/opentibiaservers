import Oxygenot13RetroServerKeywordPage, { generateMetadata } from './oxygenot-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oxygenot13RetroServerKeywordPage />;
}
