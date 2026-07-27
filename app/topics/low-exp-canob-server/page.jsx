import LowExpCanobServerKeywordPage, { generateMetadata } from './low-exp-canob-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpCanobServerKeywordPage />;
}
