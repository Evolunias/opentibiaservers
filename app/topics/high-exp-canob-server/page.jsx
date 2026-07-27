import HighExpCanobServerKeywordPage, { generateMetadata } from './high-exp-canob-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpCanobServerKeywordPage />;
}
