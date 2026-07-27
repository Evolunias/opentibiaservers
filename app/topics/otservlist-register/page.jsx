import OtservlistRegisterKeywordPage, { generateMetadata } from './otservlist-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtservlistRegisterKeywordPage />;
}
