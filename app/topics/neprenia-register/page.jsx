import NepreniaRegisterKeywordPage, { generateMetadata } from './neprenia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaRegisterKeywordPage />;
}
