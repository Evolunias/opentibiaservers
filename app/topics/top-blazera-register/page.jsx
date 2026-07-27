import TopBlazeraRegisterKeywordPage, { generateMetadata } from './top-blazera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopBlazeraRegisterKeywordPage />;
}
