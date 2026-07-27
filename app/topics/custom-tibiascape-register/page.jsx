import CustomTibiascapeRegisterKeywordPage, { generateMetadata } from './custom-tibiascape-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiascapeRegisterKeywordPage />;
}
