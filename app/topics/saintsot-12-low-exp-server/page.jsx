import Saintsot12LowExpServerKeywordPage, { generateMetadata } from './saintsot-12-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot12LowExpServerKeywordPage />;
}
