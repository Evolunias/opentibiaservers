import NewCanobRegisterKeywordPage, { generateMetadata } from './new-canob-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCanobRegisterKeywordPage />;
}
