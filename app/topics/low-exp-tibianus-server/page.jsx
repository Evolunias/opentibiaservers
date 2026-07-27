import LowExpTibianusServerKeywordPage, { generateMetadata } from './low-exp-tibianus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpTibianusServerKeywordPage />;
}
