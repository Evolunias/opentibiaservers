import LowExpKasteriaServerKeywordPage, { generateMetadata } from './low-exp-kasteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpKasteriaServerKeywordPage />;
}
