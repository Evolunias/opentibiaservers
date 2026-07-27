import NewNilotRegisterKeywordPage, { generateMetadata } from './new-nilot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNilotRegisterKeywordPage />;
}
