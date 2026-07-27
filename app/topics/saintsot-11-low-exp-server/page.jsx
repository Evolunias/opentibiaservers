import Saintsot11LowExpServerKeywordPage, { generateMetadata } from './saintsot-11-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot11LowExpServerKeywordPage />;
}
