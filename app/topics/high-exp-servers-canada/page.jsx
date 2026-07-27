import HighExpServersCanadaKeywordPage, { generateMetadata } from './high-exp-servers-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpServersCanadaKeywordPage />;
}
