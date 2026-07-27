import HighExpServersArgentinaKeywordPage, { generateMetadata } from './high-exp-servers-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpServersArgentinaKeywordPage />;
}
