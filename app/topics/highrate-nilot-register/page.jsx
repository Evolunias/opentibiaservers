import HighrateNilotRegisterKeywordPage, { generateMetadata } from './highrate-nilot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNilotRegisterKeywordPage />;
}
