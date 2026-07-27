import Oxygenot13EvoServerKeywordPage, { generateMetadata } from './oxygenot-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oxygenot13EvoServerKeywordPage />;
}
