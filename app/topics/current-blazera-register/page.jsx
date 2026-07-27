import CurrentBlazeraRegisterKeywordPage, { generateMetadata } from './current-blazera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentBlazeraRegisterKeywordPage />;
}
