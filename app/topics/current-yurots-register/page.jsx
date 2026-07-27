import CurrentYurotsRegisterKeywordPage, { generateMetadata } from './current-yurots-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentYurotsRegisterKeywordPage />;
}
