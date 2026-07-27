import HighrateBlazeraRegisterKeywordPage, { generateMetadata } from './highrate-blazera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateBlazeraRegisterKeywordPage />;
}
