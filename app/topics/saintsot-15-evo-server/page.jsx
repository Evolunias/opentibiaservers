import Saintsot15EvoServerKeywordPage, { generateMetadata } from './saintsot-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot15EvoServerKeywordPage />;
}
