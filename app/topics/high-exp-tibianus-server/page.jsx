import HighExpTibianusServerKeywordPage, { generateMetadata } from './high-exp-tibianus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpTibianusServerKeywordPage />;
}
