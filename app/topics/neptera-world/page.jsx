import NepteraWorldKeywordPage, { generateMetadata } from './neptera-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepteraWorldKeywordPage />;
}
