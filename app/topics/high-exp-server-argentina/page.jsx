import HighExpServerArgentinaKeywordPage, { generateMetadata } from './high-exp-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpServerArgentinaKeywordPage />;
}
