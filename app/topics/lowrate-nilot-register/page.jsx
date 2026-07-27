import LowrateNilotRegisterKeywordPage, { generateMetadata } from './lowrate-nilot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNilotRegisterKeywordPage />;
}
