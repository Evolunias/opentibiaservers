import Saintsot13LowExpServerKeywordPage, { generateMetadata } from './saintsot-13-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot13LowExpServerKeywordPage />;
}
