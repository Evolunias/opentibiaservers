import HighExpAmeriaServerKeywordPage, { generateMetadata } from './high-exp-ameria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpAmeriaServerKeywordPage />;
}
