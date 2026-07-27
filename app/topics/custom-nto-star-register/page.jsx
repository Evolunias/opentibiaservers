import CustomNtoStarRegisterKeywordPage, { generateMetadata } from './custom-nto-star-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNtoStarRegisterKeywordPage />;
}
