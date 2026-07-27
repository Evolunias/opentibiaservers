import Saintsot12EvoServerKeywordPage, { generateMetadata } from './saintsot-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot12EvoServerKeywordPage />;
}
