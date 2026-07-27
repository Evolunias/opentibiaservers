import LowrateNostaltherRegisterKeywordPage, { generateMetadata } from './lowrate-nostalther-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNostaltherRegisterKeywordPage />;
}
