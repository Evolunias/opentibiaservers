import HighExpServerListArgentinaKeywordPage, { generateMetadata } from './high-exp-server-list-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpServerListArgentinaKeywordPage />;
}
