import TopCanobRegisterKeywordPage, { generateMetadata } from './top-canob-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCanobRegisterKeywordPage />;
}
