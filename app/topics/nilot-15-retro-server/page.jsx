import Nilot15RetroServerKeywordPage, { generateMetadata } from './nilot-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot15RetroServerKeywordPage />;
}
