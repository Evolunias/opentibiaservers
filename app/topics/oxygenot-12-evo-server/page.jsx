import Oxygenot12EvoServerKeywordPage, { generateMetadata } from './oxygenot-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oxygenot12EvoServerKeywordPage />;
}
