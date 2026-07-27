import NostaltherRegisterKeywordPage, { generateMetadata } from './nostalther-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherRegisterKeywordPage />;
}
