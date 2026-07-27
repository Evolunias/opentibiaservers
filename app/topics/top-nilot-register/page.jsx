import TopNilotRegisterKeywordPage, { generateMetadata } from './top-nilot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNilotRegisterKeywordPage />;
}
