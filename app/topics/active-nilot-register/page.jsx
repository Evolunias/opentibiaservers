import ActiveNilotRegisterKeywordPage, { generateMetadata } from './active-nilot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNilotRegisterKeywordPage />;
}
