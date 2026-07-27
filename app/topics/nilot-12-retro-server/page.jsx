import Nilot12RetroServerKeywordPage, { generateMetadata } from './nilot-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot12RetroServerKeywordPage />;
}
