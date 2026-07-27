import Nilot11RetroServerKeywordPage, { generateMetadata } from './nilot-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot11RetroServerKeywordPage />;
}
