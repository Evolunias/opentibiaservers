import Saintsot15LowExpServerKeywordPage, { generateMetadata } from './saintsot-15-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot15LowExpServerKeywordPage />;
}
