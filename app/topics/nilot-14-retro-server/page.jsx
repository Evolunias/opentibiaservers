import Nilot14RetroServerKeywordPage, { generateMetadata } from './nilot-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot14RetroServerKeywordPage />;
}
