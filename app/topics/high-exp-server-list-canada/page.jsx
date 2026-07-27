import HighExpServerListCanadaKeywordPage, { generateMetadata } from './high-exp-server-list-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpServerListCanadaKeywordPage />;
}
