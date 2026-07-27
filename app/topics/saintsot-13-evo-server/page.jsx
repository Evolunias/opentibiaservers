import Saintsot13EvoServerKeywordPage, { generateMetadata } from './saintsot-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot13EvoServerKeywordPage />;
}
