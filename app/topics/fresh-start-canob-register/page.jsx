import FreshStartCanobRegisterKeywordPage, { generateMetadata } from './fresh-start-canob-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCanobRegisterKeywordPage />;
}
