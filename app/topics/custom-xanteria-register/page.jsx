import CustomXanteriaRegisterKeywordPage, { generateMetadata } from './custom-xanteria-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomXanteriaRegisterKeywordPage />;
}
