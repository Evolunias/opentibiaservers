import Oxygenot15EvoServerKeywordPage, { generateMetadata } from './oxygenot-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oxygenot15EvoServerKeywordPage />;
}
