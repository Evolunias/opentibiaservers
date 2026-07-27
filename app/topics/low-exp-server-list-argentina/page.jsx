import LowExpServerListArgentinaKeywordPage, { generateMetadata } from './low-exp-server-list-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpServerListArgentinaKeywordPage />;
}
