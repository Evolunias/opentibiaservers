import Nilot13RetroServerKeywordPage, { generateMetadata } from './nilot-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot13RetroServerKeywordPage />;
}
