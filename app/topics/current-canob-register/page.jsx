import CurrentCanobRegisterKeywordPage, { generateMetadata } from './current-canob-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCanobRegisterKeywordPage />;
}
